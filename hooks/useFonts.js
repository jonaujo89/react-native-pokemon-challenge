import {
  useFonts as useLatoFont,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";

//manage all fonts in one file.
const useFonts = () => {
  const [oswaldLoaded, oswaldError] = useOswaldFont({
    Oswald_400Regular,
    Oswald_700Bold,
  });

  const [latoLoaded, latoError] = useLatoFont({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (oswaldError || latoError) {
    //could send alert to user
    console.log("Error loading fonts");
    return null;
  }

  return oswaldLoaded && latoLoaded;
};

export default useFonts;
