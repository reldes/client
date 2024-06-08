const MainRoutes = {
  path: '/',
  meta: {
    requiresAuth: true
  },
  redirect: '/',
  component: () => import('@/layouts/dashboard/DashboardLayout.vue'),
  children: [
    {
      name: 'Dashboard',
      path: '/',
      component: () => import('@/views/dashboard/DefaultDashboard.vue')
    },
  ]
};

export default MainRoutes;
