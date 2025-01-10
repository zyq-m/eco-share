import api from "@/utils/axios";
import { router } from "expo-router";
import React, { useState } from "react";
import { ItemT } from "@/constants/type";

import { Box, Text, HStack, Button, VStack, Modal, Heading } from "native-base";

export default function ConfirmationModal({
	item,
	id,
}: {
	item: ItemT;
	id: string;
}) {
	const [isSubmit, setIsSubmit] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [showModal2, setShowModal2] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const onRequest = async () => {
		setIsSubmit(true);
		// try {
		// 	await api.post(`/item/${id}`, { quantity });

		router.push("/(sidebar)/(tabs)/chat");
		setIsSubmit(false);
		setShowModal(false);
		setShowModal2(false);
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	const onQuantity = (number: number) => {
		setQuantity((prev) => {
			let tmp = prev + number;
			if (item && tmp >= item.quantity && tmp <= 0) return prev + number;
			return prev;
		});
	};
	return (
		<>
			<Button
				isDisabled={!item?.available}
				onPress={() => setShowModal(true)}
			>
				Request This Item
			</Button>
			<Modal isOpen={showModal}>
				<Modal.Content maxWidth="400px">
					<Modal.CloseButton onPress={() => setShowModal(false)} />
					<Modal.Header>Item</Modal.Header>
					<Modal.Body>
						<HStack
							alignItems="center"
							justifyContent="space-between"
						>
							<Text>Quantity</Text>
							<Button.Group
								variant="outline"
								isAttached
								size="sm"
							>
								<Button onPress={() => onQuantity(-1)}>
									-
								</Button>
								<Button disabled>{quantity}</Button>
								<Button onPress={() => onQuantity(1)}>+</Button>
							</Button.Group>
						</HStack>
					</Modal.Body>
					<Modal.Footer>
						<Button
							flex="1"
							isLoadingText="Confirm"
							isLoading={isSubmit}
							onPress={() => {
								setShowModal(false);
								setShowModal2(true);
							}}
						>
							Continue
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
			<Modal isOpen={showModal2}>
				<Modal.Content maxWidth="400px">
					<Modal.CloseButton
						onPress={() => {
							setShowModal(true);
							setShowModal2(false);
						}}
					/>
					<Modal.Header>Guidelines</Modal.Header>
					<Modal.Body>
						<VStack space="4">
							<Box>
								<Heading size="md">Do</Heading>
								<Text>Indicate what time you can collect</Text>
								<Text>Inform if you're running late</Text>
							</Box>
							<Box>
								<Heading size="md">Don't</Heading>
								<Text>Ask the item to be delivered/posted</Text>
								<Text>
									Get upset if you dont't get something
								</Text>
								<Text>Set off for a collection untill</Text>
								<Text>1. It's been confirmed</Text>
								<Text>2. You have the address</Text>
								<Text>3. There's an agreed time</Text>
							</Box>
						</VStack>
					</Modal.Body>
					<Modal.Footer>
						<Button
							flex="1"
							isLoadingText="Confirm"
							isLoading={isSubmit}
							onPress={onRequest}
						>
							Continue in chat
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</>
	);
}
