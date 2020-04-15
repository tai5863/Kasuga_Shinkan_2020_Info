<script>
export default {
  name: 'Main',
  props: {
    main: String
  },
  data() {
      return {
      }
  },   
  render() {
    let processTextArray = this.parseText();
    return (<p>
      { processTextArray.map((text) => {
        let regex = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g; // ']))/;
        if(text.match(regex)) {
          return <a href={text} class="link">{text}</a>
        } else {
          return text
        }
      })}
    </p>
  )},
   methods: {
    parseText: function(){
      let processText = this.main;
      let regex = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g; // ']))/;

      let match;
      let matchObj = {};
      let count = 0;

      while ((match = regex.exec(processText)) != null) {
        count += 1;
        matchObj[`[${count}]`] = match[0];
        processText = processText.replace(match[0], `[${count}]`);
      }

      const keys = Object.keys(matchObj);

      keys.forEach((key) => {
        processText = processText.replace(key, `,${matchObj[key]},`);
      })
      return processText.split(',');
    }
  }
};
</script>

<style scoped>
.link {
  color: black;
  cursor: pointer;
}
</style>
