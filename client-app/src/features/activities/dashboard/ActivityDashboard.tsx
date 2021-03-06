import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
	Activities: Activity[];
	selectedActivity: Activity | undefined;
	selectActivity: (id: string) => void;
	cancelSelectActivity: () => void;
	editMode: boolean;
	openForm: (id: string) => void;
	closeForm: () => void;
	createOrEdit: (activity: Activity) => void;
	deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({ Activities, selectedActivity, selectActivity,
	cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity }: Props) {
	return (
		<Grid>
			<Grid.Column width="10">
				<ActivityList activities={Activities} selectActivity={selectActivity} deleteActivity={deleteActivity}></ActivityList>
			</Grid.Column>
			<Grid.Column width="6">
				{
					selectedActivity &&
					<ActivityDetails activity={selectedActivity} openForm={openForm} cancelSelecteActivity={cancelSelectActivity} />
				}
				{
					editMode &&
					<ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}></ActivityForm>
				}
			</Grid.Column>

		</Grid>
	);
}