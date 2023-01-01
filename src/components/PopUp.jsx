import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function PopUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bgColor={"#E5E5E5"} />
        <ModalContent
          w={["343px", "393px"]}
          h={["500px", "462"]}
          marginTop={["180", "100px"]}
          textAlign={"center"}
        >
          <ModalHeader
            marginTop={"84px"}
            fontSize={"18px"}
            fontWeight={"semibold"}
            lineHeight={"28px"}
            color={"#212529"}
          >
            Welcome Ranger!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            fontSize={"18px"}
            fontWeight={"light"}
            lineHeight={"28px"}
            color={"#868E96"}
          >
            From utilities to pets and more, Utility Ranger is the easiest and
            best way to boost the revenue you receive each month from your
            rental units. As we continue to add more revenue streams and useful
            features, it only means one thing: more profit and more equity for
            you! Let’s get started.
          </ModalBody>

          <ModalFooter
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              variant={"outline"}
              color={"#495057"}
              fontSize={"14px"}
              fontWeight={"medium"}
              lineHeight={"20px"}
            >
              I’ll Go Solo
            </Button>
            <Button
              variant="solid"
              color={"white"}
              bgColor={"#1971C2"}
              fontSize={"14px"}
              fontWeight={"medium"}
              lineHeight={"20px"}
            >
              Guide Me!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default PopUp;
