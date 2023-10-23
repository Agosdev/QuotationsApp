/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getQuoteAppData } from "../graphql/queries";
import { updateQuoteAppData } from "../graphql/mutations";
export default function QuoteAppDataUpdateForm(props) {
  const {
    id: idProp,
    quoteAppData: quoteAppDataModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    queryName: "",
    quotesGenerated: "",
    createdAt: "",
    updatedAt: "",
  };
  const [queryName, setQueryName] = React.useState(initialValues.queryName);
  const [quotesGenerated, setQuotesGenerated] = React.useState(
    initialValues.quotesGenerated
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = quoteAppDataRecord
      ? { ...initialValues, ...quoteAppDataRecord }
      : initialValues;
    setQueryName(cleanValues.queryName);
    setQuotesGenerated(cleanValues.quotesGenerated);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [quoteAppDataRecord, setQuoteAppDataRecord] = React.useState(
    quoteAppDataModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getQuoteAppData.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getQuoteAppData
        : quoteAppDataModelProp;
      setQuoteAppDataRecord(record);
    };
    queryData();
  }, [idProp, quoteAppDataModelProp]);
  React.useEffect(resetStateValues, [quoteAppDataRecord]);
  const validations = {
    queryName: [{ type: "Required" }],
    quotesGenerated: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
    updatedAt: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          queryName,
          quotesGenerated,
          createdAt,
          updatedAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateQuoteAppData.replaceAll("__typename", ""),
            variables: {
              input: {
                id: quoteAppDataRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "QuoteAppDataUpdateForm")}
      {...rest}
    >
      <TextField
        label="Query name"
        isRequired={true}
        isReadOnly={false}
        value={queryName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              queryName: value,
              quotesGenerated,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.queryName ?? value;
          }
          if (errors.queryName?.hasError) {
            runValidationTasks("queryName", value);
          }
          setQueryName(value);
        }}
        onBlur={() => runValidationTasks("queryName", queryName)}
        errorMessage={errors.queryName?.errorMessage}
        hasError={errors.queryName?.hasError}
        {...getOverrideProps(overrides, "queryName")}
      ></TextField>
      <TextField
        label="Quotes generated"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={quotesGenerated}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              queryName,
              quotesGenerated: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.quotesGenerated ?? value;
          }
          if (errors.quotesGenerated?.hasError) {
            runValidationTasks("quotesGenerated", value);
          }
          setQuotesGenerated(value);
        }}
        onBlur={() => runValidationTasks("quotesGenerated", quotesGenerated)}
        errorMessage={errors.quotesGenerated?.errorMessage}
        hasError={errors.quotesGenerated?.hasError}
        {...getOverrideProps(overrides, "quotesGenerated")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              queryName,
              quotesGenerated,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={true}
        isReadOnly={false}
        value={updatedAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              queryName,
              quotesGenerated,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || quoteAppDataModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || quoteAppDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
