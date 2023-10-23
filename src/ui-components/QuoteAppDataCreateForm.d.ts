/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuoteAppDataCreateFormInputValues = {
    queryName?: string;
    quotesGenerated?: number;
    createdAt?: string;
    updatedAt?: string;
};
export declare type QuoteAppDataCreateFormValidationValues = {
    queryName?: ValidationFunction<string>;
    quotesGenerated?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuoteAppDataCreateFormOverridesProps = {
    QuoteAppDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    queryName?: PrimitiveOverrideProps<TextFieldProps>;
    quotesGenerated?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuoteAppDataCreateFormProps = React.PropsWithChildren<{
    overrides?: QuoteAppDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuoteAppDataCreateFormInputValues) => QuoteAppDataCreateFormInputValues;
    onSuccess?: (fields: QuoteAppDataCreateFormInputValues) => void;
    onError?: (fields: QuoteAppDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuoteAppDataCreateFormInputValues) => QuoteAppDataCreateFormInputValues;
    onValidate?: QuoteAppDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuoteAppDataCreateForm(props: QuoteAppDataCreateFormProps): React.ReactElement;
