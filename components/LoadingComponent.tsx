import React from "react";
import { ActivityIndicator } from "react-native";

import { CenteredView } from "./ui/CenteredView";

import { theme } from "../theme";

const LoadingComponent = () => {
  return (
    <CenteredView>
      <ActivityIndicator size="large" color={theme.colors.bg.loading} />
    </CenteredView>
  );
};

export default LoadingComponent;
