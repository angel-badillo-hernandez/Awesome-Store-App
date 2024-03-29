import React from 'react';
import { View, Linking } from 'react-native';
import { Layout, Button, Text, Section, SectionContent, useTheme } from 'react-native-rapi-ui';

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 20,
        }}
      >
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: 'center' }}>
              These UI components provided by Rapi UI
            </Text>
            <Button
              style={{ marginTop: 10 }}
              text="Login"
              status="info"
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
            <Button
              text="Search"
              onPress={() => {
                navigation.navigate('Search');
              }}
              style={{
                marginTop: 10,
              }}
            />

            <Button
              text={isDarkmode ? 'Light Mode' : 'Dark Mode'}
              status={isDarkmode ? 'success' : 'warning'}
              onPress={() => {
                if (isDarkmode) {
                  setTheme('light');
                } else {
                  setTheme('dark');
                }
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
