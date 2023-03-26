// in src/posts.js
import * as React from "react";
import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';
import { Create, SimpleForm, TextInput, DateInput,  } from 'react-admin';
import { Form,  RichTextInput, SaveButton } from 'react-admin';
import { Show, SimpleShowLayout, RichTextField } from 'react-admin';
import { Edit, ReferenceManyField, EditButton, required } from 'react-admin';

// import RichTextInput from 'ra-input-rich-text';
import { Grid } from '@mui/material';





export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="category" />
            <BooleanField source="commentable" />
        </Datagrid>
    </List>
);


export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth />
            <TextInput source="teaser" multiline={true} label="Short description" />
            <RichTextInput source="body" />
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);




export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" validate={required()} />
            <TextInput multiline source="teaser" validate={required()} />
            <RichTextInput source="body" validate={required()} />
            <DateInput label="Publication date" source="published_at" />
            <ReferenceManyField label="Comments" reference="comments" target="post_id">
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);


export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="teaser" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="published_at" />
        </SimpleShowLayout>
    </Show>
);