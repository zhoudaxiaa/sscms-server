<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: 'component'
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    vnodes.push(<svg-icon icon-class={icon} />)

    vnodes.push(<span slot="title">{title}</span>)

    return vnodes
  }
}
</script>