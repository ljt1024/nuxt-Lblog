<template>
    <div class="aside-wrap">
      <ul>
        <li>
          <el-badge :value="article.thumbs" :type="article.isFlower ? 'primary':'info'" class="badge">
            <div :class="article.isFlower ? ['isLike','panel-btn'] : 'panel-btn'" @click="thumb">
              <i class="icon iconfont icon-zan-shen"></i>
            </div>
          </el-badge>
        </li>
        <li>
          <el-badge :value="article.comments" type="info" class="badge">
            <a href="#comment">
              <div class="panel-btn">
                <i class="icon el-icon-s-comment"></i>
              </div>
            </a>
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
          const userInfo = JSON.parse(localStorage.getItem('userInfo'))
          if (!userInfo) {
            this.$store.commit('user/showLogin', true)
            return
          }
          const result = await this.$axios.post('/api/article/thumb',{articleId: this.article.id, userId: userInfo.id})
          let thumbs = this.article.thumbs
          let isFlower = this.article.isFlower
          if (result.data.code === 200) {
            if (isFlower) {
              thumbs = Math.max(0 , --thumbs)
              this.$set(this.article, 'isFlower', false)
            } else {
              thumbs++
              this.$set(this.article, 'isFlower', true)
            }
          }
          this.$set(this.article, 'thumbs', thumbs)
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
