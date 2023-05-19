import Head from "next/head";
import styles from 'styles/SleepAdvices.module.css'
import NavBar from "@/components/NavBar";
import PieChart from "@/components/BarChart";
export default function SleepAdvices () {
    return(
        <>
        <div className={styles.mainContent}>
            <div className={styles.topContainer}>
        <h1 className={styles.pageTitle}>Tips to get a good night sleep</h1>
        </div>
        <PieChart/>
        <h3 className={styles.title_one}>1. Avoid caffeine late in the day</h3>
        <div className={styles.advice_one}>Caffeine has many benefits, it can help with increasing focus and energy. However when it’s consumed late in the day, caffeine stymulates your nervous system and may stop your body from naturally relaxing at night. One study shows that consuming coffee up to 6 hours before bed can significantly lower sleep quality. Therefor drinking coffee after 4pm is not recommended, especially if you have trouble falling asleep.</div>
        <h3 className={styles.title_two}>2. Avoid eating late in the evening</h3>
        <div className={styles.advice_two}>Eating late at night can negatively affect sleep quality and the natural release of melatonin. Consuming a large meal before bed can lead to poor sleep quality and hormone disruption.  In one study a high carb meal eaten 4 hours before sleep helped people to fall asleep faster.</div>
        <h3 className={styles.title_three}>3. Include physical activity in your daily routine but not before bed</h3>
        <div className={styles.advice_three}>Regular exercise during daytime hours is the best way to ensure a good nights sleep. Physical activity has been used to reduce symptoms of insomnia. Exercise can reduce time falling asleep by 55%, anxiety by 15% and increasing total sleep time by 18%. However having physical activity in the night time can cause sleep problems. This is because exercise increases alertness and hormones like epinephrine and adrenaline.</div>
        <h3 className={styles.title_four}>4. Reduce blue light exposure during the evening</h3>
        <div className={styles.advice_four}>Bluelight tricks your body into thinking it’s daytime. There are several methods you can do to reduce bluelight exposure in the evening. For example you can instal an app that will block bluelight on your phone. Don’t watch TV and turn off all the bright lights 2 hours before sleep. There are also glasses that block bluelight.</div>
        <h3 className={styles.title_five}>5. Reduce irregular or long daytime naps</h3>
        <div className={styles.advice_five}>Short power naps are beneficial but having long naps during the day can negatively affect your sleep. Sleeping in the daytime can confuse your internal clock meaning that you may struggle to sleep at night. One study shows that participants felt more tired during the day after taking daytime naps. Another study shows that naping for 30 minutes or less can enhance daytime brain function.If you have trouble sleeping at night, you can try to shorten your daytime naps to 30 minutes or less.</div>
        <h3 className={styles.title_six}>6. Set your bedroom temperature </h3>
        <div className={styles.advice_six}>Bedroom and body temperature. It can be hard to get a good night sleep when the temperature is to hight, for example during the summer or in hot locations. Studies show that increased bedroom and body temperature can decrease sleep quality. Test different temperatures until you find which one works for you the best. Most people say that the ideal bedroom temperature for sleep is around 70°F (20°C) </div>
        <h3 className={styles.title_seven}>7. Take a relaxing bath or shower</h3>
        <div className={styles.advice_seven}>A warm bath or shower before bed can help you relax and improve your sleep quality. Studies show that taking a bath 90 minutes before bed can help you relax and improve your sleep quality and help people get more deep sleep.</div>



        <NavBar/>
        </div>

        </>
    )
}