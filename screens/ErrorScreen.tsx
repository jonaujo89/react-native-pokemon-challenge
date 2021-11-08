import React from "react";
import { SafeAreaView, Text } from "react-native";

import { CenteredView } from "../components/ui/CenteredView";

const ErrorScreen = () => {
  return (
    <SafeAreaView>
      <CenteredView>
        <Text>Something went wrong.</Text>
        <Text>Please try again.</Text>
      </CenteredView>
    </SafeAreaView>
  );
};

export default ErrorScreen;
