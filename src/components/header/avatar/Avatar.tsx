"use client";
import avatarImg from "@/assets/avatar.jpg";
import Image from "next/image";
import "./styles.css";
export function Avatar() {
  return (
    <div className="sci-avatar">
      <div>
        <div>
          <div>
            <div className="testCard">
              <Image
                className="avatar-photo"
                alt="avatar-photo"
                src={avatarImg}
              />
              {/* <v-list>  
          <v-list-item
            v-for="menu in menus"
            :key="menu.rota"
            @click="$util.go(menu.rota)"
          >
            <v-list-item-title>
              <strong>{{ menu.menu }}</strong>
            </v-list-item-title>
          </v-list-item>
        </v-list> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
