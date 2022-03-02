import React, {useState} from 'react';
import { StatusBar } from 'react-native';

//formik
import { Formik } from 'formik'; 

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
     } from './../components/styles';

const Welcome = ({navigation}) => {
    return (
        <>
            <StatusBar style="dark"/>
            <InnerContainer>
                <WelcomeImage resizeMode= "cover" source={require('./../assets/img/background.jpg')}/>
                <WelcomeContainer>
                <PageTitle Welcome={true}>Welcome</PageTitle>
                <SubTitle Welcome={true}>Lars Larson</SubTitle>
                <SubTitle Welcome={true}>LarsLarson@outlook.com</SubTitle>
                 <StyledFormArea>
                 <Avatar resizeMode= "cover" source={require('./../assets/img/logo1.png')} />
                    <Line/>
                      <StyledButton onPress={() => {navigation.navigate('Login')}}
                      >
                          <ButtonText>Logout</ButtonText>
                      </StyledButton>
                      </StyledFormArea>

                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Welcome;