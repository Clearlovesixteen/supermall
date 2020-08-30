<template>
  <div class="param-info" v-if="paramInfo">
    <table class="info-size" v-for="(table,index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.infos" :key="index">
        <td class="infokey">{{info.key}}</td>
        <td class="infovalue">{{info.value}}</td>
      </tr>
    </table>
    <img :src="paramInfo.image" alt />
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style  scoped>
table {
  width: 100%;
}
table tr {
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #f5f5f5;
}
tr {
  display: flex;
}
.info-size td {
  flex: 1;
}
.infokey {
  flex: 1;
}
.infovalue {
  flex: 3;
  color: var(--color-high-text);
}
</style>