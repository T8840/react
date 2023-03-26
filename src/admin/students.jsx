// in src/Students.js
import * as React from "react";
import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';
import { Create, SimpleForm, TextInput, DateInput,  } from 'react-admin';
import { Form,  RichTextInput, SaveButton } from 'react-admin';
import { Show, SimpleShowLayout, RichTextField } from 'react-admin';
import { Edit, ReferenceManyField, EditButton, required } from 'react-admin';

// import RichTextInput from 'ra-input-rich-text';
import { Grid } from '@mui/material';





export const StudentList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="score" />
            <TextField source="created_at" />
        </Datagrid>
    </List>
);


export const StudentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} fullWidth />
            <TextInput source="score"  />

        </SimpleForm>
    </Create>
);




export const StudentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" validate={required()} />
            <TextInput source="score"  />

        </SimpleForm>
    </Edit>
);


export const StudentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="score" />

            <DateField label="Create date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);