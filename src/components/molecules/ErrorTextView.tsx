import React, {FC} from 'react';
import { ErrorDescriptionText, ErrorTextMainView } from '../atoms/Inputs/Styles';
import ErrorImage from '../../assets/images/clarity_error-line.svg';

interface Errors {
    error: string;
  }

export const ErrorText: FC<Errors> = props => {
    return (
        <ErrorTextMainView>
            <ErrorImage />
            <ErrorDescriptionText>{props.error}</ErrorDescriptionText>
        </ErrorTextMainView>
    );
}