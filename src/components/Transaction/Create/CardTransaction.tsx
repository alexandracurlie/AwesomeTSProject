import React from "react";
import {View} from "react-native";
import {Section} from "../../containers/Section";
import {BankCardsList} from "../../Lists/BankCardsList";
import {ProfilesList} from "../../Lists/ProfilesList";
import {TransactionForm} from "../TransactionForm/TransactionForm";

export const CardTransaction = () => (
  <View>
    <Section title={"Select credit card"}>
      <BankCardsList />
    </Section>
    <Section title={"Recipient"} btn={"See all"}>
      <ProfilesList />
    </Section>
    <Section title={"Transaction details"}>
      <TransactionForm />
    </Section>
  </View>
)
