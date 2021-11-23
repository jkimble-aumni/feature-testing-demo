import { HStack, VStack } from "@chakra-ui/layout";
import { Text, Checkbox } from "@chakra-ui/react";
import { useEffect } from "react";
import UtilSelectorProvider, {
  useUtilSelectorContext,
} from "./util-selector.provider";

export default function UtilSelectorWithContext() {
  return (
    <UtilSelectorProvider>
      <UtilSelector />
    </UtilSelectorProvider>
  );
}

function RadioCard(props) {
  return (
    <Checkbox
      cursor="pointer"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      _checked={{
        borderColor: "teal.600",
      }}
      px={5}
      py={3}
      {...props}
    >
      {props.children}
    </Checkbox>
  );
}

function UtilSelector() {
  const { formatedText, utils, activeUtils, setActiveUtils } =
    useUtilSelectorContext();
  const handleChange = ({ target: { name } }) =>
    setActiveUtils((curr) => {
      const index = curr.indexOf(name);
      if (index < 0) return [...curr, name];
      return curr.filter((_, i) => i !== index);
    });

  return (
    <VStack>
      <HStack spacing={4}>
        {utils.map((util) => (
          <RadioCard
            colorScheme="green"
            isChecked={activeUtils.includes(util)}
            key={util}
            name={util}
            onChange={handleChange}
            size="md"
          >
            {util}
          </RadioCard>
        ))}
      </HStack>
      <Text as="div" pt="24px" fontSize="lg">
        {formatedText}
      </Text>
    </VStack>
  );
}
