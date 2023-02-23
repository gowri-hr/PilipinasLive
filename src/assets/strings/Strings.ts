import LocalizedStrings from 'react-native-localization';

const String = new LocalizedStrings({
  en: {
    first: 'Email must have a number and special character.',
    second: 'Email is required',
    passwordMatch: 'Please enter a password with at least 8 characters',
    passwordRequired: 'Enter password',
    confirmPasswordRequired: 'Enter confirm password',
    confirmPasswordMatch: 'Password do not match',
    welcomeText: 'MABUHAY!',
    welcomeSubText: 'Welcome to the home of Filipino Live Sports',
    forgotFirstText: 'Forgot your password?',
    forgotSecondText: 'Enter your registered email',
    buttonTitleContinue: 'CONTINUE',
    verifyFirstText: 'Verify your OTP',
    signUpFirstText: 'Verification was successful!',
    signUpSecondText: "Let’s set up your account",
    CheckText1: 'I agree to Pilipina’s ',
    CheckText2: 'Terms of Use ',
    CheckText3: 'Privacy Policy',
    CheckText4: 'and have read and understood the Cignal TV Inc’s',
    SignInText: 'Sign In here',
    AlreadyText: 'Already have an Account?',
    ResendOtpText: 'Resend OTP in 57 secs',
    OtpText: 'OTP was sent to'
  }
});

export default String;