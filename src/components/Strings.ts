import LocalizedStrings from 'react-native-localization';

const String = new LocalizedStrings({
  en: {
    first: 'Email must have a number and special character.',
    second: 'Email is required',
    passwordMatch: 'Please enter a password with at least 8 characters',
    passwordRequired: 'Enter password',
    welcomeText: 'MABUHAY!',
    welcomeSubText: 'Welcome to the home of Filipino Live Sports',
    forgotFirstText: 'Forgot your password?',
    forgotSecondText: 'Enter your registered email',
    buttonTitleContinue: 'CONTINUE',
    verifyFirstText: 'Verify your OTP',
    signUpFirstText: '"Verification was successful!',
    signUpSecondText: "Let’s set up your account",
  }
});

export default String;