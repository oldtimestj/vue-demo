<!--
Created by zhulixiao on 2020/4/22.
-->
<script>
  export default {
    name: 'PlButton',
    props: {
      type: {
        type: String,
        default: 'default',
      },
      abc: Function,
    },
    functional: true,
    render(h, context) {
      const {
        props, listeners, slots, data, 
      } = context;
      return (
        <el-button on={listeners} {...props} {...data.attrs}>
          {slots().default}
        </el-button>
      );
    },
  };
</script>
