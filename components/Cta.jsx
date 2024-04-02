import {Button} from './ui/button';
import Link from 'next/link';
import {Fragment} from "react";

const Cta = () => {
    return (
        <section className={"py-24 bg-tertiary dark:bg-secondary/40"}>
            <div className={"container mx-auto"}>
                <div className={"flex flex-col items-center"}>
                    <h2 className={"h2 max-w-xl text-center mb-8"}>
                        Prepared to turn your ideas into reality? I&apos;m here to help you with that.
                    </h2>
                    <Link href={"/contact"}>
                        <Button>
                            Let&apos;s Talk
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Cta
