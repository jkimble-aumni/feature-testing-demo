import { Text } from "@chakra-ui/react";

export default function toParagraphs(string) {
  return string.split(".").map((str) => (
    <Text key={str} p="8px 0">
      {str}.
    </Text>
  ));
}
