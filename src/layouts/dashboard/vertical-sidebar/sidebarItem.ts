// icons
import {
  DashboardOutlined,
} from '@ant-design/icons-vue';
import api from '@/utils/helpers/api/api';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Navigation' },
  {
    title: 'Dashboard',
    icon: DashboardOutlined,
    to: '/dashboard'
  },
];

async function getSidebarItems(): Promise<menu[]> {
  const experiments = await api.experiment.getExperiments();
  console.log('items', experiments);
  const experimentItems = experiments ? experiments.map(experiment => ({
    title: experiment.title,
    // icon: ExperimentOutlined, // Replace with an appropriate icon
    to: `/experiments/${experiment.id}`
  })): [];

  return [
    ...sidebarItem,
    { header: 'Experiments' },
    ...experimentItems
  ];
}


export default getSidebarItems;
