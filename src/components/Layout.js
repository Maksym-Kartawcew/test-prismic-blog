import { Header } from "./Header";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

export function Layout({ navigation, settings, children }) {
  return (
    <div className="text-slate-700">
      <Header navigation={navigation} settings={settings} />
      <Hero />
      <main>{children}</main>
      <Footer navigation={navigation} />
    </div>
  );
}
