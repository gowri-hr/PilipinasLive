import {Field, Formik} from 'formik';
import React, {FC, useState} from 'react';
import String from '../../../assets/strings/Strings';
import {Buttons, OptionButtons} from '../../../components/atoms/Buttons/Index';
import {ChooseSportsScreenProps} from '../../../utils/LoginUserNavigation';
import {MySafeAreaView, Container, MyAwareScrollView} from '../../Login/Styles';
import {
  OptionsView,
  PersonalizeButtonView,
  PersonalizeSkipText,
  PersonalizeSubTitle,
  PersonalizeTitle,
  PersonalizeView,
} from './Styles';

const ChooseSports: FC<ChooseSportsScreenProps> = props => {
  const [badminton, setBadminton] = useState(false);
  const [hockey, setHockey] = useState(false);
  const [volleyball, setVolleyball] = useState(false);
  const [baseball, setBaseball] = useState(false);
  const [basketball, setBasketball] = useState(false);
  const [tennis, setTennis] = useState(false);
  const [boxing, setBoxing] = useState(false);
  const [football, setFootball] = useState(false);
  const [golf, setGolf] = useState(false);

  const handleBadminton = () => {
    setBadminton(!badminton);
  };
  const handleHockey = () => {
    setHockey(true);
  };
  const handleVolleyball = () => {
    setVolleyball(true);
  };
  const handleBaseball = () => {
    setBaseball(true);
  };
  const handleBasketball = () => {
    setBasketball(true);
  };
  const handleTennis = () => {
    setTennis(true);
  };
  const handleBoxing = () => {
    setBoxing(true);
  };
  const handleFootball = () => {
    setFootball(true);
  };
  const handleGolf = () => {
    setGolf(true);
  };
  const handleChooseSportsContinue = () => {
    // code to be written
  };

  return (
    <MySafeAreaView>
      <Container>
        <MyAwareScrollView>
          <PersonalizeView>
            <PersonalizeSkipText>{String.Skip}</PersonalizeSkipText>
          </PersonalizeView>
          <PersonalizeView>
            <PersonalizeTitle>{String.SportSelect}</PersonalizeTitle>
            <PersonalizeSubTitle>{String.Select1}</PersonalizeSubTitle>
          </PersonalizeView>
          <Formik initialValues={{}} onSubmit={handleChooseSportsContinue}>
            {({handleSubmit}) => (
              <>
                <OptionsView>
                  <Field
                    component={OptionButtons}
                    title={String.badminton}
                    onPress={handleBadminton}
                    disabled={badminton}
                  />
                  <Field
                    component={OptionButtons}
                    title={String.hockey}
                    onPress={handleHockey}
                    disabled={hockey}
                  />
                  <Field
                    component={OptionButtons}
                    title={String.volleyball}
                    onPress={handleVolleyball}
                    disabled={volleyball}
                  />
                  <Field
                    component={OptionButtons}
                    title={String.baseball}
                    onPress={handleBaseball}
                    disabled={baseball}
                  />
                  <Field
                    component={OptionButtons}
                    title={String.basketball}
                    onPress={handleBasketball}
                    disabled={basketball}
                  />
                  <Field
                    component={OptionButtons}
                    title={String.tennis}
                    onPress={handleTennis}
                    disabled={tennis}
                  />
                  <Field
                    component={OptionButtons}
                    title={String.boxing}
                    onPress={handleBoxing}
                    disabled={boxing}
                  />
                  <Field
                    component={OptionButtons}
                    title={String.football}
                    onPress={handleFootball}
                    disabled={football}
                  />
                  <Field
                    component={OptionButtons}
                    title={String.golf}
                    onPress={handleGolf}
                    disabled={golf}
                  />
                </OptionsView>
                <PersonalizeButtonView>
                  <Field
                    component={Buttons}
                    title={String.buttonTitleContinue}
                    onPress={handleSubmit}
                    disabled={
                      !(
                        badminton ||
                        hockey ||
                        volleyball ||
                        baseball ||
                        boxing ||
                        golf ||
                        football ||
                        tennis ||
                        basketball
                      )
                    }
                  />
                </PersonalizeButtonView>
              </>
            )}
          </Formik>
        </MyAwareScrollView>
      </Container>
    </MySafeAreaView>
  );
};

export default ChooseSports;