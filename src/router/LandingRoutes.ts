const LandingRoutes = {
    path: '/',
    meta: {
      requiresAuth: false
    },
    redirect: '/landing',
    // component: () => import('@/layouts/dashboard/DashboardLayout.vue'),
    children: [
      {
        name: 'Landing',
        path: '/',
        component: () => import('@/views/landing/Landing.vue')
      },
    ]
  };
  
  export default LandingRoutes;
  