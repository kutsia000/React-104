let idx = 1;

export const goals = [
  {
    title: 'მიზანი 1',
    description: 'აღწერა',
    completed: false,
    id: idx++,
  },
  {
    title: 'მიზანი 2',
    description: 'აღწერა',
    completed: true,
    id: idx++,
  },
  {
    title: 'მიზანი 3',
    description: 'აღწერა',
    completed: false,
    id: idx++,
  },
];

export const FILTER_GOAL = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  ACTIVE: 'ACTIVE',
};
