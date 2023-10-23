/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { QuoteAppData } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuoteAppDataUpdateFormInputValues = {
    queryName?: string;
    quotesGenerated?: number;
    createdAt?: string;
    updatedAt?: string;
};
export declare type QuoteAppDataUpdateFormValidationValues = {
    queryName?: ValidationFunction<string>;
    quotesGenerated?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuoteAppDataUpdateFormOverridesProps = {
    QuoteAppDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    queryName?: PrimitiveOverrideProps<TextFieldProps>;
    quotesGenerated?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuoteAppDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuoteAppDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    quoteAppData?: QuoteAppData;
    onSubmit?: (fields: QuoteAppDataUpdateFormInputValues) => QuoteAppDataUpdateFormInputValues;
    onSuccess?: (fields: QuoteAppDataUpdateFormInputValues) => void;
    onError?: (fields: QuoteAppDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuoteAppDataUpdateFormInputValues) => QuoteAppDataUpdateFormInputValues;
    onValidate?: QuoteAppDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuoteAppDataUpdateForm(props: QuoteAppDataUpdateFormProps): React.ReactElement;
