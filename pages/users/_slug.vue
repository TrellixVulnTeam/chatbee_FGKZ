<template>
  <div class="page-wrapper">
    <transition name="fade">
      <div class="datepicker-modal middle-item" v-if="selectdate == true">
        <div class="">
          <v-date-picker
            color="#FFBC00"
            v-model="picker"
            year-icon="mdi-calendar-blank"
            prev-icon="mdi-skip-previous"
            next-icon="mdi-skip-next"
          ></v-date-picker>
          <div style="margin-top: 15px;">
            <v-btn depressed large dark
              color="#FFBC00"
              @click="selectdate = false">
              Save Date
            </v-btn>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="change-password-con middle-item" v-if="changepassword == true">
        <div class="modla-inner">
          <div class="headtitle">
            Change User's Password
          </div>
          <div class="contentdata-box">
            <div class="contentdata-label">
              password
            </div>
            <div class="contentdata-value">
              <input type="text" v-model="pass1">
            </div>
          </div>
          <div class="contentdata-box" style="margin-top: 20px;">
            <div class="contentdata-label">
              confirm password
            </div>
            <div class="contentdata-value">
              <div class="contentdata-value">
                <input type="text" v-model="pass2">
              </div>
            </div>
          </div>
          <div class="contentdata-box">
            <div class="button-con right" style="margin-top: 20px;">
              <v-btn depressed large dark
                color="#aaa"
                @click="changepassword = false">
                Cancel
              </v-btn>
              <v-btn depressed large dark
                color="#FFBC00"
                @click="changePassword()">
                Submit Change
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="page-section">
      <Breadbar :datas="[
        { name: 'Home', link: '/' },
        { name: 'Users', link: '/users' },
        { name: pageslug },
      ]" />
      <div class="headtitle">
        Change User
      </div>
      <v-row>
        <v-col lg="12" md="12" cols="12" sm="12" xs="12">
          <div class="contentdata-box">
            <div class="contentdata-label">
              username
            </div>
            <div class="contentdata-value">
              {{ user.username }}
            </div>
          </div>
        </v-col>
        <v-col lg="12" md="12" cols="12" sm="12" xs="12">
          <div class="contentdata-box">
            <div class="contentdata-label">
              password
            </div>
            <div class="contentdata-value">
              XXXX*********AVAA
              <v-btn depressed small dark
                color="#FFBC00"
                style="margin-left: 10px;"
                @click="changepassword = true">
                Change Password
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      <div class="line-divider"></div>
      <div class="subheadtitle">
        Personal Info
      </div>
      <v-row>
        <!-- <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">
              Firstname
            </div>
            <div class="contentdata-value">
              <input type="text" v-model="firstname">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">
              Lastname
            </div>
            <div class="contentdata-value">
              <input type="text" v-model="lastname">
            </div>
          </div>
        </v-col> -->
        <v-col lg="12" md="12" cols="12" sm="12" xs="12">
          <div class="contentdata-box">
            <div class="contentdata-label">
              Email Address
            </div>
            <div class="contentdata-value">
              <input type="text" v-model="user.email">
            </div>
          </div>
        </v-col>
      </v-row>
      <div class="line-divider"></div>
      <div class="subheadtitle">
        User Profile
      </div>
      <v-row>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">
              Apple UID
            </div>
            <div class="contentdata-value">
              <input type="text" v-model="user.appleUid">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">
              Facebook ID
            </div>
            <div class="contentdata-value">
              <input type="text" v-model="user.facebookId">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">
              Phone Number
            </div>
            <div class="contentdata-value">
              <input type="text" v-model="user.phoneNumber">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">
              Phone Number Verified
            </div>
            <div class="contentdata-value">
              <v-switch
                v-model="phone_verify"
                color="#B5D744"
                inset
              ></v-switch>
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">
              Recommended User
            </div>
            <div class="contentdata-value">
              <nuxt-link :to="'/users/'+user.refUid" class="viewdata" v-if="user.refUsername != ''">
                {{ user.refUsername }}
              </nuxt-link>
              <div v-else>
                -
              </div>
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">
              Password Token
            </div>
            <div class="contentdata-value">
              <input type="text">
            </div>
          </div>
        </v-col>
        <!-- <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">
              Password Token Expired
            </div>
            <div class="contentdata-value">
              <v-row>
                <v-col lg="6" md="6" cols="6" sm="6" xs="6">
                  <div class="contentdata-value">
                    <div class="icon-right" @click="selectdate = true">
                      <i class="las la-calendar-alt"></i>
                    </div>
                    <input type="text" placeholder="Start Date">
                  </div>
                </v-col>
                <v-col lg="6" md="6" cols="6" sm="6" xs="6">
                  <div class="contentdata-value">
                    <div class="icon-right" @click="selectdate = true">
                      <i class="las la-calendar-alt"></i>
                    </div>
                    <input type="text" placeholder="End Date">
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col> -->
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">City</div>
            <div class="contentdata-value">
              <input type="text">
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <!-- <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">Address</div>
            <div class="contentdata-value">
              <input type="text">
            </div>
          </div>
        </v-col> -->
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Lat</div>
            <div class="contentdata-value">
              <input type="text" placeholder="0.0000000" v-model="user.lat">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Lon</div>
            <div class="contentdata-value">
              <input type="text" placeholder="0.0000000" v-model="user.lon">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Profile Picture</div>
            <div class="contentdata-value" v-if="false">
              <v-file-input
                accept="image/*"
                label="User's Image"
              ></v-file-input>
            </div>
            <img :src="user.profileImage" width="100%" v-if="user.profileImage">
            <img src="/noimage.png" width="100%" v-else>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Profile Name</div>
            <div class="contentdata-value">
              <input type="text" v-model="user.displayName">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">Sub Profile Name</div>
            <div class="contentdata-value">
              <input type="text">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Date of birth</div>
            <div class="contentdata-value">
              <div class="icon-right" @click="selectdate = true">
                <i class="las la-calendar-alt"></i>
              </div>
              <input type="text" placeholder="Birth date" v-model="user.birthday">
            </div>
            <div class="contentdata-value" v-if="birthday">
              {{ user.birthday }}
            </div>
            <div class="contentdata-value" v-else>
              -
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Last Login</div>
            <div class="contentdata-value">
              <div class="icon-right" @click="selectdate = true">
                <i class="las la-calendar-alt"></i>
              </div>
              <input type="text" placeholder="Last login" v-model="user.lastLogin">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Date Joined</div>
            <div class="contentdata-value">
              <div class="icon-right" @click="selectdate = true">
                <i class="las la-calendar-alt"></i>
              </div>
              <input type="text" placeholder="Date Joined" v-model="user.createdAt">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Gender</div>
            <div class="contentdata-value none-input">
              <v-select
                v-model="user.gender"
                :items="genders"
                label="-- Select Gender --"
                outlined
              ></v-select>
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Interested in</div>
            <div class="contentdata-value none-input">
              <v-select
                v-model="user.genderInterest"
                :items="genders"
                label="-- Select Gender --"
                outlined
              ></v-select>
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Relation</div>
            <div class="contentdata-value none-input">
              <span v-if="user.relationshipStatus">
                {{ user.relationshipStatus }}
              </span>
              <span v-else>
                -
              </span>
              <!-- <v-select
                :items="[{ text: '------' }]"
                label="Relation"
                outlined
              ></v-select> -->
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">Description</div>
            <div class="contentdata-value">
              <input type="text" v-model="user.bio">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Hobby</div>
            <div class="contentdata-value">
              <input type="text" v-model="user.hobby">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Occupation</div>
            <div class="contentdata-value">
              <input type="text" v-model="user.occupation">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6">
          <div class="contentdata-box">
            <div class="contentdata-label">Is Drink</div>
            <span v-if="user.drinking">
              {{ user.drinking }}
            </span>
            <span v-else>
              -
            </span>
            <!-- <div class="contentdata-value none-input">
              <v-select
                :items="[{ text: '------' }]"
                label="Relation"
                outlined
              ></v-select>
            </div> -->
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">Is Nightlife Lover</div>
            <div class="contentdata-value none-input">
              <v-select
                :items="[{ text: '------' }]"
                label="Relation"
                outlined
              ></v-select>
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">Coin</div>
            <div class="contentdata-value">
              <input type="text" placeholder="12345">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">
              Identity Approved
            </div>
            <div class="contentdata-value">
              <v-switch
                v-model="identity"
                color="#B5D744"
                inset
              ></v-switch>
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">ID Card File</div>
            <div class="contentdata-value">
              <v-file-input
                accept="image/*"
                label="ID Card File"
              ></v-file-input>
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">Bookbank File</div>
            <div class="contentdata-value">
              <v-file-input
                accept="image/*"
                label="Bookbank File"
              ></v-file-input>
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6" v-if="false">
          <div class="contentdata-box">
            <div class="contentdata-label">ID Card File</div>
            <div class="contentdata-value image">
              <img
                src="https://images.unsplash.com/photo-1564064695621-5cb08cd581eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                width="100">
            </div>
          </div>
        </v-col>
        <v-col lg="6" md="6" cols="6" sm="6" xs="6"></v-col>
        <v-col lg="12" md="12" cols="12" sm="12" xs="12">
          <div class="contentdata-box inlinecontent" v-if="user.userStatus != 'ban'">
            <div class="contentdata-label" style="display: block;">Blacklist User</div>
            <div class="contentdata-value">
              <input type="text" placeholder="Remark for Blacklist" v-model="blacklistRemark">
              <v-btn depressed dark color="red"
                style="margin-top: 10px;"
                @click="setBan()">
                <i class="las la-ban"></i> Blacklist {{ user.username }}
              </v-btn>
            </div>
          </div>
          <div class="contentdata-box inlinecontent" v-if="user.userStatus == 'ban'">
            <v-btn
              disabled
              elevation="2"
              color="red"
              style="margin-top: 10px;">
              {{ user.username }} is Banned
            </v-btn>
            <!-- <div class="contentdata-label" style="display: block;">Blacklist User</div>
            <div class="contentdata-value">
              <input type="text" placeholder="Remark for Blacklist" v-model="blacklistRemark">
              <v-btn depressed dark color="orange"
                style="margin-top: 10px;"
                @click="setunBan()">
                <i class="las la-redo"></i> Unban {{ user.username }}
              </v-btn> -->
          </div>
        </v-col>
        <v-col lg="12" md="12" cols="12" sm="12" xs="12">
          <div class="contentdata-box">
            <div class="contentdata-label">Post</div>
            <div class="contentdata-value">
              <v-btn depressed dark color="primary"
                @click="viewRoute('/userpost/'+pageslug)">
                VIEW POST
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      <div v-if="false">
        <div class="line-divider"></div>
        <div class="subheadtitle">
          User Infraction Statistics
        </div>
        <Infuserstat />
        <div class="line-divider"></div>
      </div>
      <v-row>
        <v-col lg="12" md="12" cols="12" sm="12" xs="12" v-if="false">
          <div class="contentdata-box">
            <div class="button-con">
              <v-btn depressed large dark color="#FFBC00" @click="viewRoute('/users')">
                Submit
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Breadbar from "~/components/Breadbar.vue";
import Infuserstat from "~/components/Infuserstat.vue";
export default {
  name: "homepage",
  components: [ Breadbar, Infuserstat ],
  computed: {
    ...mapState(["accessToken"]),
  },
  data() {
    return {
      genders: [],
      selectdate: false,
      changepassword: false,
      blacklistRemark: '',
      pageslug: this.$route.params.slug,
      pass1: '',
      pass2: '',
      user: [],
    }
  },
  mounted () {
    this.getUser()
    this.getGenderGroup()
  },
  methods: {
    async setBan () {
      const headers = { "x-rotor-auth": this.accessToken }
      let dataset = {
        "remark": this.blacklistRemark,
        "uid": this.user.uid
      }
      await this.$axios.$post('/v1/users.ban', dataset, { headers }).then((response) => {
        console.log(response)
        this.getUser()
      }).catch((error) => {
        console.log(error)
      })
    },
    async setunBan () {
      const headers = { "x-rotor-auth": this.accessToken }
      let dataset = {
        "id": this.user.uid
      }
      await this.$axios.$post('/v1/users.unban', dataset, { headers }).then((response) => {
        console.log(response)
        this.getUser()
      }).catch((error) => {
        console.log(error)
      })
    },
    changePassword () {
      const headers = { "x-rotor-auth": this.accessToken }
      let dataset = {
        confirmPassword: this.pass1,
        newPassword: this.pass2,
        uid: this.user.uid
      }
      this.$axios.$post('/v1/users.force-change-password', dataset, { headers }).then((response) => {
        console.log(response)
        this.changepassword = false
      }).catch((error) => {
        console.log(error)
        this.changepassword = false
      })
    },
    getGenderGroup () {
      this.$axios.$get('/v1/users-group-gender', {
        headers: {"x-rotor-auth": this.accessToken}
      }).then((response) => {
        this.loading = false
        response.data.forEach((item, i) => {
          this.genders.push(item.gender)
        });
      }).catch((error) => {
        this.loading = false
      })
    },
    getUser() {
      this.loading = true
      this.$axios.$get('/v1/users.detail?uuid='+this.pageslug, {
        headers: {"x-rotor-auth": this.accessToken}
      }).then((response) => {
        console.log(response.data)
        this.loading = false
        this.users = []
        this.user = response.data
      }).catch((error) => {
        this.loading = false
      })
    },
    viewRoute(link) {
      this.$router.push({
        path: link
      });
    },
    redirectTo(path) {
      this.$router.replace({ path });
    }
  }
};
</script>
<style lang="scss" scoped>

.linkusername {
  cursor: pointer;
  color: $primary;
}
.function-con {
  //text-align: right;
  .function-box {
    width: 30px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
    &:hover {
      background-color: $primary;
      color: #fff;
    }
  }
}
.status {
  height: 25px;
  line-height: 25px;
  border-radius: 6px;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  &.active {
    background-color: $correct;
  }
  &.deactive {
    background-color: $error;
  }
}

.change-password-con {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  z-index: 50000;
  .modla-inner {
    padding: 30px;
    background-color: #fff;
    width: 600px;
  }
}
</style>
