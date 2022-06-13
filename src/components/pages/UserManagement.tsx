/* eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManegement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();

  const onClickUser = useCallback(() => onOpen(), []);

  //レンダー後に何かの処理をしないといけない、ということを React に伝える
  useEffect(() => getUsers(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="space-around">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <p>テスト</p>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
});
