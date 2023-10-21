import Head from 'next/head'
 
// Components
import { BackgroundImage, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText,  QuoteGeneratorCon, QuoteGeneratorInnerCon,   QuoteGeneratorTitle, RedSpan } from '@/components/QuoteGenerator/QuoteGenerator'
import QuoteGeneratorModal from '@/components/QuoteGenerator'

// Assets
import QuoteIcon from '../assets/quoteICON.png'
import { API } from 'aws-amplify'
import { generateAQuote, quotesQueryName } from '@/src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { useEffect, useState } from 'react'
import Speaker from '@/components/OpenAITool/OpenAITool'
import dynamic from 'next/dynamic'
 import Background3D from '@/components/Background3D/background3D'



// interface for our appsync <> lambda JSON response
interface GenerateAQuoteData {
  generateAQuote: {
    statusCode: number;
    headers: { [key: string]: string };
    body: string;
  }
}

// interface for our DynamoDB object
interface UpdateQuoteInfoData {
  id: string;
  queryName: string;
  quotesGenerated: number;
  createdAt: string;
  updatedAt: string;
}

// type guard for our fetch function
function isGraphQLResultForquotesQueryName(response: any): response is GraphQLResult<{
  quotesQueryName: {
    items: [UpdateQuoteInfoData];
  };
}> {
  return response.data && response.data.quotesQueryName && response.data.quotesQueryName.items;
}

const R3FBackground = dynamic(() => import('../components/Background3D/background3D'))


export default function Home() {

  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  const [openGenerator, setOpenGenerator] = useState(false);
  const [processingQuote, setProcessingQuote] = useState(false);
  const [quoteReceived, setQuoteReceived] = useState<String | null>(null);

  // Function to fetch our DynamoDB object (quotes generated)
  const updateQuoteInfo = async () => {
    try {
      const response = await API.graphql<UpdateQuoteInfoData>({
        query: quotesQueryName,
        authMode: "AWS_IAM",
        variables: {
          queryName: "LIVE",
        },
      })
      console.log('response', response);
      // setNumberOfQuotes();

      // Create type guards
      if (!isGraphQLResultForquotesQueryName(response)) {
        throw new Error('Unexpected response from API.graphql');
      }

      if (!response.data) {
        throw new Error('Response data is undefined');
      }

      const receivedNumberOfQuotes = response.data.quotesQueryName.items[0].quotesGenerated;
      setNumberOfQuotes(receivedNumberOfQuotes);

    } catch (error) {
      console.log('error getting quote data', error)
    }
  }

  useEffect(() => {
    updateQuoteInfo();
  }, [])


  // Functions for quote generator modal
  const handleCloseGenerator = () => {
    setOpenGenerator(false);
    setProcessingQuote(false);
    setQuoteReceived(null);
  }

  const handleOpenGenerator = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpenGenerator(true);
    setProcessingQuote(true);
    try {
      // Run Lambda Function
      const runFunction = "runFunction";
      const runFunctionStringified = JSON.stringify(runFunction);
      const response = await API.graphql<GenerateAQuoteData>({
        query: generateAQuote,
        authMode: "AWS_IAM",
        variables: {
          input: runFunctionStringified,
        },
      });
      const responseStringified = JSON.stringify(response);
      const responseReStringified = JSON.stringify(responseStringified);
      const bodyIndex = responseReStringified.indexOf("body=") + 5;
      const bodyAndBase64 = responseReStringified.substring(bodyIndex);
      const bodyArray = bodyAndBase64.split(",");
      const body = bodyArray[0];
      console.log(body);
      setQuoteReceived(body);

      // End state:
      setProcessingQuote(false);

      // Fetch if any new quotes were generated from counter
      updateQuoteInfo();
       
      // setProcessingQuote(false);
      // setTimeout(() => {
      //   setProcessingQuote(false);
      // }, 3000);
    } catch (error) {
      console.log('error generating quote:', error);
      setProcessingQuote(false);
    }
  }


  return (
    <>
      <Head>
        <title>Quotations</title>
        <meta name="description" content="A project with Next js, typescript and AWS amplify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundImage
          src={QuoteIcon}
          height={500}
          width={500}
          alt="QuoteIcon"
        />

       {/* <R3FBackground /> */}



  <Speaker/>


<QuoteGeneratorModal
          open={openGenerator}
          close={handleCloseGenerator}
          processingQuote={processingQuote}
          setProcessingQuote={setProcessingQuote}
          quoteReceived={quoteReceived}
          setQuoteReceived={setQuoteReceived}
        />



{/* Reemplazar boton para la request por otra iniciativa para obtener la frase */}
        {/* <QuoteGeneratorCon>
            <GenerateQuoteButton onClick={handleOpenGenerator}>
              <GenerateQuoteButtonText>
                Get Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
        </QuoteGeneratorCon> */}


        <FooterCon>
          <>
            Developed with <RedSpan>♥</RedSpan> by <FooterLink href="https://github.com/Agosdev" target="_blank" rel="noopener noreferrer"> @Agosdev</FooterLink>. 
            Random quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>.
          </>
        </FooterCon>

        
    </>
  )
}
