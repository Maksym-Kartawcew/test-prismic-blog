import { Header } from "./Header";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

export function Layout({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}) {
  return (
    <div className="text-slate-700">
      <Header
        withProfile={withProfile}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      <Hero
        name={settings.data.name}
        description={settings.data.description}
        profilePicture={settings.data.profilePicture}
      />
      <main>{children}</main>
      <Footer navigation={navigation} />
    </div>
  );
}
