import React, { useEffect, useState } from "react";
import Footer from "@/components/atoms/Footer/Footer";
import GenericButton from "@/components/atoms/GenericButton/GenericButton";
import QuoteGeneratorModal from "@/components/molecules/QuoteGeneratorModal/QuoteGeneratorModal";
import { API } from "aws-amplify";
import { generateAQuote, quotesQueryName } from '@/src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { GenerateQuotesCon } from "./GenerateQuotesElements";

const GenerateQuotes = () => {

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
      
      
      const [numberOfQuotes, setNumberOfQuotes] = useState<number>(0);
      const [openGenerator, setOpenGenerator] = useState<boolean>(false);
      const [processingQuote, setProcessingQuote] = useState<boolean>(false);
      const [quoteReceived, setQuoteReceived] = useState<string | null>(null);
      const [hideButton, setHideButton] = useState<boolean>(false);

      // Function to fetch our DynamoDB object (quotes generated)
      const updateQuoteInfo = async () => {
        try {
          const response = await API.graphql<UpdateQuoteInfoData>({
            query: quotesQueryName,
            authMode: "AWS_IAM",
            variables: {
              queryName: "LOVE",
            },
          })
      
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
          setHideButton(false)
        }
      
          const handleOpenGenerator = async (e: React.SyntheticEvent) => {
            e.preventDefault();
            setOpenGenerator(true);
            setProcessingQuote(true);
            setHideButton(true)

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
              setQuoteReceived(body);
              setProcessingQuote(false);
        
              // Fetch if any new quotes were generated from counter
              updateQuoteInfo();
               
            } catch (error) {
              console.log('error generating quote:', error);
              setProcessingQuote(false);
            }
          }
      

  return (
    <GenerateQuotesCon>
        <QuoteGeneratorModal
            open={openGenerator}
            close={handleCloseGenerator}
            processingQuote={processingQuote}
            setProcessingQuote={setProcessingQuote}
            quoteReceived={quoteReceived}
            setQuoteReceived={setQuoteReceived}
        />
        
        {!hideButton && <GenericButton text={'Get a quote'} onClick={(e: React.SyntheticEvent) => handleOpenGenerator(e)} />}

        {/* <Footer numberOfQuotes={numberOfQuotes}/> */}
    </ GenerateQuotesCon >
  );
};

export default GenerateQuotes;
