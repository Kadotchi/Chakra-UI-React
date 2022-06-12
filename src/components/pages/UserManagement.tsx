import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";

export const UserManegement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {[...Array(10)].map(() => (
        <WrapItem>
          <UserCard
            imageUrl="https://source.unsplash.com/random"
            userName="かどっち"
            fullName="Kotaro Kadoshima"
          />
        </WrapItem>
      ))}
    </Wrap>
  );
});
