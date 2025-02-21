import {getDictionary} from "../../../public/i18n";
import {ThemeSwitcher} from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";


export default async function Home({params: {lang},}: { params: { lang: string }; }) {
    const t = await getDictionary(lang);
    return (
        <div className="flex flex-col items-center justify-between p-24 text-2xl">
            <LanguageSwitcher/>
            <div>{t.page}</div>
            <ThemeSwitcher/>
        </div>
    );
}
