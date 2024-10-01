import styles from './page.module.css';
import Header from './components/Header/Header';
import type React from 'react';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className={styles.page}>
        <h1>対象者</h1>
        <h3 className={styles.centerMsg}>呉市に観光で来た方のうち</h3>
        <div className={styles.whiteBox}>
          <p>
            安芸灘大橋を<span>現金で通行</span>した
          </p>
          <p>（普通自動車・軽自動車・125cc超の二輪自動車等）</p>
        </div>
        <div className={styles.puls}></div>
        <div className={styles.whiteBox}>
          <p>
            安芸灘とびしま海道エリアの
            <span>指定施設で合計1,000円以上利用</span>した
          </p>
        </div>

        <h1>交換方法</h1>
        <h3 className={styles.subtitle}>
          <span>①</span> 以下の２点を準備する
        </h3>
        <div className={styles.whiteBox}>
          <p>安芸灘大橋の通行領収書</p>
          <p className={styles.greranBlue}>※原本はお返しできません</p>
        </div>
        <div className={styles.whiteBox}>
          <p>指定施設が発行した合計1,000円以上のレシートまたは領収書</p>
          <p className={styles.greranBlue}>※原本はお返しできません</p>
        </div>
        <h3 className={styles.subtitle}>
          <span>②</span> 指定の交付施設へ持参し、<br></br>　
          安芸灘大橋の通行券と交換する
        </h3>
        <div className={styles.buleBox}>
          <p>
            安芸灘大橋通行領収書と、指定施設の領収書だけでは通行できません。
            <br></br>
            必ず交付施設で通行券と交換してから通行してください。
          </p>
        </div>
        <p className={styles.smallMsg}>
          ※通行券の交換期限は、安芸灘大橋の現金利用又は、指定施設で消費した日のいずれか早い日から起算して７日以内です
        </p>

        <h1>交付施設一覧</h1>
        <div>
          {/* ボタンはコンポーネント化してもいい（他ページで再利用するなら特に） */}
          <button>下蒲刈</button>
        </div>
        <div className={styles.mapBox}></div>
        <h1>指定施設一覧</h1>
        <h3>以下の指定施設で、1000円以上お買い物をしよう！</h3>
        <p>
          ※指定施設は通行券の交換を行っておりません。※必ず交付施設で通行券を交換してください
        </p>
        <button>すべて見る</button>
        <h1>Q＆A</h1>
        <div className={styles.qaBox}></div>
      </div>
    </div>
  );
}
