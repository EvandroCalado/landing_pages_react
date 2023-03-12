import Table from '.';

import { args } from "../Pricing/args"

const TableStories = {
  title: 'Table',
  component: Table,
  args: args
};

export const Template = (args) => {
  return (
    <div>
      <Table {...args} />
    </div>
  );
};

export default TableStories