import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
interface Props {
	openForm: (id?: string) => void;
}
export default function NavBar({ openForm }: Props) {
	return (
		<Menu inverted fixed="top">
			<Container>
				<Menu.Item header>
					<img src="/assets/logo.png" alt="logo" style={{ marginRight: "10px" }} />
					Reactivities
				</Menu.Item>
				<Menu.Item name="Activities"></Menu.Item>
				<Menu.Item>
					<Button onClick={() => openForm(undefined)} positive content="Create Activity"></Button>
				</Menu.Item>
			</Container>
		</Menu>
	);
}