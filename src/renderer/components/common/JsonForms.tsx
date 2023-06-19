import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';


// REVIEW: Flatten the schema UI or find out how to keep structure

const makeUISchema = (schema: any, base: string): any => {
  const properties = Object.keys(schema.properties);
  const elements = properties.map((p: any) => {
    if (schema.properties[p].type === 'object') {                                 
      return makeUISchema(schema.properties[p], `${base}${p}/properties/`);
    } else {
      return {
        "type": "Control",
        "scope": `#/properties${base}${p}`
      }
    }
  });
  return { 
    "type": "VerticalLayout",
    "elements": elements
  };
}

export default function JsonForm(props: any) {
  const {schema, initialdata, onChange} = props;
  // const [data, setData] = useState(initialdata);
  return (
    <JsonForms
      schema={schema}
      uischema={makeUISchema(schema, '/')}
      data={initialdata}
      renderers={materialRenderers}
      cells={materialCells}
      config={{showUnfocusedDescription: true}}
      onChange={({ data, errors }) => {
        // console.log(data);
        // setData(data);
        onChange(data);
      }}
    />
  );
  }