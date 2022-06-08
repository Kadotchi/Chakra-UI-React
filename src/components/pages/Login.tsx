import { Box, Button, Divider, Flex, Heading, Input } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Logitn: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box>
        <Heading as="h1">ユーザー管理アプリ</Heading>
        <Divider />
        <Input placeholder="ユーザーID" />
        <Button>ログイン</Button>
      </Box>
    </Flex>
  );
});
