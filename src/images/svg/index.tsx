import React from "react";
import {IconProp} from "../../utilities";
import {HomeIcon} from "./HomeIcon";
import {WalletIcon} from "./WalletIcon";
import {SendIcon} from "./SendIcon";
import {DiagramIcon} from "./DiagramIcon";
import {SettingsIcon} from "./SettingsIcon";
import {InfoIcon} from "./InfoIcon";
import {PasswordIcon} from "./PasswordIcon";
import {EmailIcon} from "./EmailIcon";
import {PhoneIcon} from "./PhoneIcon";
import {NotificationIcon} from "./NotificationIcon";
import {CurrencyIcon} from "./CurrencyIcon";
import {LangIcon} from "./LangIcon";
import {AccountIcon} from "./AccountIcon";
import {PolicyIcon} from "./PolicyIcon";
import {TermsIcon} from "./TermsIcon";
import {Colors} from "../../styles";

export {BurgerMenuIcon} from "./BurgerMenuIcon";
export {VisaLogoIcon} from "./VisaLogoIcon";

export const IconsTab = {
  home: ({color}: IconProp) => <HomeIcon color={color}/>,
  wallet: ({color}: IconProp) => <WalletIcon color={color}/>,
  send: ({color}: IconProp) => <SendIcon color={color}/>,
  diagram: ({color}: IconProp) => <DiagramIcon color={color}/>,
  settings: ({color}: IconProp) => <SettingsIcon color={color}/>,
}

export const IconsSettings = {
  info: <InfoIcon color={Colors.white}/>,
  password: <PasswordIcon color={Colors.white}/>,
  email: <EmailIcon color={Colors.white}/>,
  phone: <PhoneIcon color={Colors.white}/>,
  notification: <NotificationIcon color={Colors.white}/>,
  currency: <CurrencyIcon color={Colors.white}/>,
  lang: <LangIcon color={Colors.white}/>,
  account: <AccountIcon color={Colors.white}/>,
  policy: <PolicyIcon color={Colors.white}/>,
  terms: <TermsIcon color={Colors.white}/>,
}
