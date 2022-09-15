<template>
    <div class="aside-wrap">
      <ul>
        <li>
          <el-badge :value="article.thumbs" :type="article.isLike?'primary':'info'" class="badge">
            <div :class="article.isLike?['isLike','panel-btn'] : 'panel-btn'" @click="thumb">
              <i class="icon iconfont icon-zan-shen"></i>
            </div>
          </el-badge>
        </li>
        <li>
          <el-badge :value="article.comments" type="info" class="badge">
            <div class="panel-btn">
              <i class="icon el-icon-s-comment"></i>
            </div>
          </el-badge>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "Side",
      props: {
        article: {
          type: Object,
          default: ()=> {}
        }
      },
      methods: {
        async thumb() {
          await this.$axios.post('/api/article/updateLike',{id: this.article.id})
          let thumbs = this.article.thumbs
          if (this.article.isLike) {
            thumbs++
          } else if(thumbs > 0){
           thumbs--
          }
          this.$set(this.article, 'thumbs',thumbs)
        }
      }
    }
</script>

<style scoped lang="scss">
.aside-wrap {
  position: fixed;
  margin-left: -7rem;
  top: 140px;
  .badge {
    ::v-deep {
      .el-badge__content.is-fixed {
        right: 15px;
        top: 4px;
      }
    }
  }
  .panel-btn {
    position: relative;
    margin-bottom: 1.667rem;
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    background-color: #fff;
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
    cursor: pointer;
    text-align: center;
    font-size: 1.67rem;
    .icon {
      font-size: 20px;
      color: #8a919f;
    }
  }
  .panel-btn:hover .icon{
    color: #515767;
  }
  .isLike {
    .icon {
      color: #007fff;
    }
  }
}
</style>
