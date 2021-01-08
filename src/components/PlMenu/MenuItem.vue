<!--
Created by zhulixiao on 2020/4/30.
-->
<script>
  export default {
    functional: true,
    name: 'MenuItem',
    props: {
      menuItem: Object,
      menuIndex: String,
    },
    render(createElement, context) {
      const { props: { menuItem }, slots } = context;
      const hasChild = menuItem?.children?.[0];
      if (hasChild) {
        return <a>{menuItem.name}</a>;
      }
      return (
        <router-link
          class={'pl-menu-item'}
          to={menuItem.router}
        >
          {menuItem.name}
          {slots().default || ''}
        </router-link>
      );
    },
    data() {
      return {};
    },
    created() {
      
    },
    methods: {},
  };
</script>
