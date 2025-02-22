import {getI18n} from "../../../public/i18n";


export default async function Home(props: { params: { lang: string } }) {
    const {lang} = await props.params;
    const t = await getI18n(lang);
    return (
        <div className="flex flex-col items-center justify-between p-24 text-2xl">
            <div>{t.page}</div>
        </div>
    );
}

