// ==============================
// POOLS FIXES (classés par intensité peak/RMS + catégorie)
// JUMP = jumpscares / cris / monstres
// ==============================

const SOUNDS = {
  tier1: [
    'https://quentinziofix.github.io/soundHalloween/monster-scream-aggressive.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Creaking%20Door/Creaking%20Door%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/u_5hx6qi66bg-strange-whispers-415245.mp3',
    'https://quentinziofix.github.io/soundHalloween/Wooden%20Foosteps/Wooden%20Foosteps%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Creaking%20Door/Creaking%20Door%20%281%29.mp3'
  ],

  tier2: [
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%288%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/chain-6073.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%202%20SFX%20Remakes/FNAF2_Grandfather%20Clock_%28Unfiltered%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Leaves%20Footsteps/Leaves%20Footsteps%20%282%29.mp3'
  ],

  tier3: [
    'https://quentinziofix.github.io/soundHalloween/horror-scream-high-quality.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Puppet%20Combo/Jumpscare_Puppet%20Combo_1.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Glitched/Jumpscare_Glitched_1.wav',
    'https://quentinziofix.github.io/soundHalloween/siren-silent-hill.mp3',
    'https://quentinziofix.github.io/soundHalloween/satanic-laugh-460877.mp3'
  ],

  gift1_4: [
    'https://quentinziofix.github.io/soundHalloween/dragon-studio-woman-screaming-sfx-screaming-sound-effect-320169.mp3',
    'https://quentinziofix.github.io/soundHalloween/clock-livingroom-subdued-chimes-blending-with-the-ticking-344188.mp3',
    'https://quentinziofix.github.io/soundHalloween/demon-chant-latin-14489.mp3',
    'https://quentinziofix.github.io/soundHalloween/piano-reverse-4-463617.mp3',
    'https://quentinziofix.github.io/soundHalloween/metal-scrape-103668.mp3',
    'https://quentinziofix.github.io/soundHalloween/water-dripping-364450.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Leaves%20Footsteps/Leaves%20Footsteps%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Leaves%20Footsteps/Leaves%20Footsteps%20%284%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/breath-stinger1-96164.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Leaves%20Footsteps/Leaves%20Footsteps%20%281%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/my-little-soda-pop.mp3',
    'https://quentinziofix.github.io/soundHalloween/conduculconconmerde.mp3',
    'https://quentinziofix.github.io/soundHalloween/freesound_community-metal-gear-solid-alarm-42627.mp3',
  ],

  gift5_10: [
    'https://quentinziofix.github.io/soundHalloween/rubber-screeching-43895.mp3',
    'https://quentinziofix.github.io/soundHalloween/jusatti890-scream-horror-sfx-490884.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%202%20SFX%20Remakes/FNAF2_Grandfather%20Clock_%28Filtered%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/Stairs%20Footsteps/Stair%20Footsteps%20%281%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/long-metal-creak-86230.mp3',
    'https://quentinziofix.github.io/soundHalloween/dont-look-behind-you-103379.mp3',
    'https://quentinziofix.github.io/soundHalloween/creepy-little-girl-singing-lalala-free-sound-fx-audiotrimmer.mp3',
    'https://quentinziofix.github.io/soundHalloween/Mud%20foosteps/Mud%20Footsteps%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/alex_jauk-ghostly-laughing-147610.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/danger2b_speak.wav',
    'https://quentinziofix.github.io/soundHalloween/dilophosaurus-roar-6073.mp3'
  ],

  gift11_20: [
    'https://quentinziofix.github.io/soundHalloween/horror-jump-scare-effect-4-250456.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/scream3.wav',
    'https://quentinziofix.github.io/soundHalloween/mixkit-gasping-zombie-963.wav',
    'https://quentinziofix.github.io/soundHalloween/heartbeat-tense-377249.mp3',
    'https://quentinziofix.github.io/soundHalloween/astral-creepy-dark-logo-254198.mp3',
    'https://quentinziofix.github.io/soundHalloween/20201020165312-99381a4a-b6e3-4a2b-bfdc-a6d3dfb543ec.mp3',
    'https://quentinziofix.github.io/soundHalloween/universfield-horror-impact-hit-567238.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Creaking%20Door/Creaking%20Door%20%287%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/spooky-whisper-410558.mp3',
    'https://quentinziofix.github.io/soundHalloween/dragon-studio-i-see-you-creepy-ghost-whisper-401711.mp3'
  ],

  gift21_40: [
    'https://quentinziofix.github.io/soundHalloween/horror-scream-high-quality.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Puppet%20Combo/Jumpscare_Puppet%20Combo_1.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Glitched/Jumpscare_Glitched_1.wav',
    'https://quentinziofix.github.io/soundHalloween/horror-jump-scare-effect-4-250456.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/scream3.wav',
    'https://quentinziofix.github.io/soundHalloween/mixkit-gasping-zombie-963.wav',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%2812%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%2811%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%286%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Otherworldly/Jumpscare_Otherworldly_1.wav',
    'https://quentinziofix.github.io/soundHalloween/man-screaming-00001.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Machine/Jumpscare_Machine_1.wav',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%284%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/woman-screaming-000005_1uBCq1R.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/fnaf/Jumpscare_fnaf_1.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/Jumpscares/Inhuman/Jumpscare_Inhuman_2.wav',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%282%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%281%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror-jump-scare-effect-4-250459.mp3',
    'https://quentinziofix.github.io/soundHalloween/gasping-sfx-419975.mp3',
    'https://quentinziofix.github.io/soundHalloween/sudden-loud-horror-scream.mp3',
    'https://quentinziofix.github.io/soundHalloween/jusatti890-scream-horror-sfx-490884.mp3',
    'https://quentinziofix.github.io/soundHalloween/rubber-screeching-43895.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%288%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%285%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/pathetic-screaming-sound-effect-312867.mp3',
    'https://quentinziofix.github.io/soundHalloween/the-rake-remastered-found.mp3',
    'https://quentinziofix.github.io/soundHalloween/screeching-sound-effect-312866.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-lurking-horror-monster-143278.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Monster%20Growl/Monster%20Growl%20%2810%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/dragon-studio-woman-screaming-sfx-screaming-sound-effect-320169.mp3',
    'https://quentinziofix.github.io/soundHalloween/monster-scream-aggressive.mp3'
  ],

  gift41_60: [
    'https://quentinziofix.github.io/soundHalloween/pantoman-monster-attack-487814.mp3',
    'https://quentinziofix.github.io/soundHalloween/freesound_community-jumpscare-94984.mp3',
    'https://quentinziofix.github.io/soundHalloween/vicksy-mirror-jumpscare.mp3',
    'https://quentinziofix.github.io/soundHalloween/jeremayjimenez-smile-dog-jumpscare-167171.mp3',
    'https://quentinziofix.github.io/soundHalloween/freesound_community-jump-scare-sound-2-82831.mp3',
    'https://quentinziofix.github.io/soundHalloween/mrlockjaw-jumpscare-206590.mp3',
    'https://quentinziofix.github.io/soundHalloween/freesound_community-fuzzy-jumpscare-80560.mp3',
    'https://quentinziofix.github.io/soundHalloween/ejah_music-classic-cinematic-jumpscare-388519.mp3',
    'https://quentinziofix.github.io/soundHalloween/freesound_community-cringe-scare-47561.mp3',
  ],

  gift61: [
    'https://quentinziofix.github.io/soundHalloween/-110063.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/danger2b.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/walk_long.wav',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-disturbing-horror-sound-2-creepy-laughter-vol-001-157464.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-horror-sound-possessed-1-threatening-vol-001-167401.mp3',
    'https://quentinziofix.github.io/soundHalloween/dark-horror-ambient-03-425466.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror-stinger.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror-violin_9xxpnRR.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Wind%20Footsteps/Wind%20Footsteps%20%284%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/hunter-spawn-cue.mp3',
    'https://quentinziofix.github.io/soundHalloween/i-see-yos.mp3',
  ],

  // Sons hors pools d’alertes — ambiance aléatoire 10–25 min
  other: [
    'https://quentinziofix.github.io/soundHalloween/-110063.mp3',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%202%20SFX%20Remakes/Room%20Tone_fnaf2.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/breathing.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/danger2b.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/danger2b_moan.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/walk1.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/walk2.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/%28bonuses%21%21%29/FNAF%203%20SFX%20Remakes/walk_long.wav',
    'https://quentinziofix.github.io/soundHalloween/A%20Horror%20Sound%20Pack%20Full%20Version/WHEN%20THE%20IMPOSTER%20IS%20A%20SUSSY%20BAKA.mp3',
    'https://quentinziofix.github.io/soundHalloween/Gravel%20Footsteps/Gravel%20Footsteps%20%285%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/Stairs%20Footsteps/Stair%20Footsteps%20%283%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-creepy-horror-sound-possessed-2-laughter-vol-001-167400.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-disturbing-horror-sound-2-creepy-laughter-vol-001-157464.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-disturbing-horror-voice-who-am-i-vol-006-165217.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-disturbing-laughter-2-513979.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-halloween-horror-sound-effect-paranormal-5-vol-002-154459.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-halloween-horror-voice-hello-vol-006-165220.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-horror-sound-effect-paranormal-1-vol-002-154453.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-horror-sound-possessed-1-threatening-vol-001-167401.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-paranormal-horror-sound-effect-1-vol-003-172827.mp3',
    'https://quentinziofix.github.io/soundHalloween/alesiadavina-scary-female-halloween-horror-laughter-vol-006-165223.mp3',
    'https://quentinziofix.github.io/soundHalloween/blizzard-wind-463217.mp3',
    'https://quentinziofix.github.io/soundHalloween/chain-rattling-prison-370007.mp3',
    'https://quentinziofix.github.io/soundHalloween/creepy-female-ghost-whispers-430175.mp3',
    'https://quentinziofix.github.io/soundHalloween/dark-horror-ambient-03-425466.mp3',
    'https://quentinziofix.github.io/soundHalloween/demonic-whisper-100425.mp3',
    'https://quentinziofix.github.io/soundHalloween/dilophosaurus_scream.mp3',
    'https://quentinziofix.github.io/soundHalloween/distorted-sound-01-brvhrtz-248242.mp3',
    'https://quentinziofix.github.io/soundHalloween/dragon-studio-creepy-whisper-472369.mp3',
    'https://quentinziofix.github.io/soundHalloween/dragon-studio-hellx27s-kitchen-violin-423655.mp3',
    'https://quentinziofix.github.io/soundHalloween/fadingembersaudio-creepy-female-ghost-whispers-430175.mp3',
    'https://quentinziofix.github.io/soundHalloween/ghost-whisper-351569.mp3',
    'https://quentinziofix.github.io/soundHalloween/ghostly-sound.mp3',
    'https://quentinziofix.github.io/soundHalloween/hellx27s-kitchen-violin-423655.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror-stinger.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror-violin_9xxpnRR.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Ambient%20Wind/Ambient%20Wind%20%284%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Carpet%20Footstep/Carpet%20Footstep%20%282%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Concrete%20Footsteps/Concrete%20Footsteps%20%281%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Creaking%20Door/Creaking%20Door%20%282%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Metal%20Footsteps/Metal%20Footsteps%20%281%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Wind%20Footsteps/Wind%20Footsteps%20%282%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/horror_sfx_vol_1/Wind%20Footsteps/Wind%20Footsteps%20%284%29.mp3',
    'https://quentinziofix.github.io/soundHalloween/hunter-spawn-cue.mp3',
    'https://quentinziofix.github.io/soundHalloween/i-see-yos.mp3',
    'https://quentinziofix.github.io/soundHalloween/impact-cinematic-boom-05-352465.mp3',
    'https://quentinziofix.github.io/soundHalloween/ki-ki-ki-ma-ma-ma-jason-vorhees.mp3',
    'https://quentinziofix.github.io/soundHalloween/kolosos-laugh.mp3',
    'https://quentinziofix.github.io/soundHalloween/konkonse.mp3',
    'https://quentinziofix.github.io/soundHalloween/metal-rattling-415814.mp3',
    'https://quentinziofix.github.io/soundHalloween/slow-heartbeat-100-bpm-152055.mp3',
    'https://quentinziofix.github.io/soundHalloween/spinopel-grinding-horror-411673.mp3',
    'https://quentinziofix.github.io/soundHalloween/tanweraman-raven-solo-call-horror-and-night-242219.mp3',
    'https://quentinziofix.github.io/soundHalloween/thunder-city-377703.mp3',
    'https://quentinziofix.github.io/soundHalloween/toc-toc-toc.mp3',
    'https://quentinziofix.github.io/soundHalloween/universfield-creepy-creaking-door-402155.mp3',
    'https://quentinziofix.github.io/soundHalloween/whoosh-riser-346045.mp3',
    'https://quentinziofix.github.io/soundHalloween/wind-howl-4-inch-pipe-38273.mp3'
  ]
};

// Durée maximale de l’alerte sonore.
// StreamElements reprend la queue après ce délai.
const ALERT_DURATION_SECONDS = 8;

// ==============================
// VOLUME
// ==============================

const VOLUME_LEVELS = [0.25, 0.40, 0.50, 0.80, 1.00];

function pickVolume(minimum = 0) {
  const allowed = VOLUME_LEVELS.filter(volume => volume >= minimum);
  return allowed[Math.floor(Math.random() * allowed.length)];
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const SOUND_GIFT_3 =
  "https://quentinziofix.github.io/soundHalloween/windows-xp-horror-edition-startup.mp3";
const SOUND_GIFT_5 = "https://quentinziofix.github.io/soundHalloween/ponpon.mp3";
const SOUND_GIFT_12 = "https://quentinziofix.github.io/soundHalloween/raptor_bark.mp3";
const SOUND_GIFT_8 = "https://quentinziofix.github.io/soundHalloween/bababidouwah.mp3";
const SOUND_GIFT_19 = "https://quentinziofix.github.io/soundHalloween/alloson.mp3"
function pickGiftSound(giftCount) {
  if (giftCount === 3) {
    return SOUND_GIFT_3;
  }
  if (giftCount === 5) {
    return SOUND_GIFT_5;
  }
  if (giftCount === 12) {
    return SOUND_GIFT_12;
  }
  if (giftCount === 8) {
    return SOUND_GIFT_8;
  }
  if (giftCount === 19) {
    return SOUND_GIFT_19;
  }
  if (giftCount >= 61) {
    return pickRandom(SOUNDS.gift61);
  }
  if (giftCount >= 41) {
    return pickRandom(SOUNDS.gift41_60);
  }
  if (giftCount >= 21) {
    return pickRandom(SOUNDS.gift21_40);
  }

  if (giftCount >= 11) {
    return pickRandom(SOUNDS.gift11_20);
  }

  if (giftCount >= 5) {
    return pickRandom(SOUNDS.gift5_10);
  }

  return pickRandom(SOUNDS.gift1_4);
}

function pickTierSound(tier) {
  if (tier === '2000') {
    return pickRandom(SOUNDS.tier2);
  }

  if (tier === '3000') {
    return pickRandom(SOUNDS.tier3);
  }

  // 1000 / prime / défaut
  return pickRandom(SOUNDS.tier1);
}

// ==============================
// TEXTE ALERTE
// ==============================

const SUB_ALERT_ROOT_ID = 'sub-alert-root';
const SUB_ALERT_HIGHLIGHT = 'rgb(106, 111, 252)';

(function injectSubAlertStyles() {
  if (document.getElementById('sub-alert-styles')) {
    return;
  }

  const font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap';
  document.head.appendChild(font);

  const style = document.createElement('style');
  style.id = 'sub-alert-styles';
  style.textContent = `
    #${SUB_ALERT_ROOT_ID} {
      font-family: "Nunito", sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 1.3;
      color: #fff;
      text-shadow: rgba(0, 0, 0, 0.8) 1px 1px 1px;
      text-align: center;
      pointer-events: none;
    }

    #${SUB_ALERT_ROOT_ID} .sub-alert-text {
      animation: sub-alert-flash-in 0.55s ease-out forwards;
    }

    @keyframes sub-alert-flash-in {
      0% {
        opacity: 0;
        color: ${SUB_ALERT_HIGHLIGHT};
      }
      35% {
        opacity: 1;
        color: ${SUB_ALERT_HIGHLIGHT};
      }
      100% {
        opacity: 1;
        color: #fff;
      }
    }
  `;
  document.head.appendChild(style);
})();

let subAlertClearTimer = null;

function buildSubAlertText(event, isGiftAlert, giftCount) {
  if (isGiftAlert) {
    const sender = event.sender || event.name || 'Quelqu\'un';

    if (giftCount >= 25) {
      return sender + ' fait une MaJ de MASSE ' + giftCount + ' Bots !';
    }

    return sender + ' fait la MaJ de ' + giftCount + ' Bots !';
  }

  const name = event.name || 'Quelqu\'un';
  const months = Number(event.amount || 1);

  if (months <= 1) {
    return name + ' fait sa première maj!';
  }

  return name + ' fait sa MaJ n°' + months + ' !';
}

function showSubAlert(text) {
  const root = document.getElementById(SUB_ALERT_ROOT_ID);

  if (!root) {
    return;
  }

  if (subAlertClearTimer) {
    clearTimeout(subAlertClearTimer);
  }

  root.innerHTML = '';
  const el = document.createElement('div');
  el.className = 'sub-alert-text';
  el.textContent = text;
  root.appendChild(el);

  subAlertClearTimer = setTimeout(function () {
    root.innerHTML = '';
    subAlertClearTimer = null;
  }, ALERT_DURATION_SECONDS * 1000);
}

// ==============================
// ÉVÉNEMENTS
// ==============================

// Après un community gift, SE envoie 1 bulk + N gifts individuels :
// on ignore ces N pour ne pas spammer.
let suppressIndividualGiftsUntil = 0;

window.addEventListener('onEventReceived', (obj) => {
  const listener = obj.detail.listener;
  const event = obj.detail.event;

  if (listener !== 'subscriber-latest') {
    SE_API.resumeQueue();
    return;
  }

  const isGift = event.gifted === true;
  const isBulkGift = event.bulkGifted === true;
  const giftCount = Number(event.amount || 1);

  // Gift unitaire pendant le sillage d’un community gift → skip
  if (isGift && !isBulkGift && Date.now() < suppressIndividualGiftsUntil) {
    SE_API.resumeQueue();
    return;
  }

  let sound;
  let minimumVolume = 0;
  const isGiftAlert = isGift || isBulkGift;

  if (isGiftAlert) {
    if (isBulkGift) {
      suppressIndividualGiftsUntil = Date.now() + ALERT_DURATION_SECONDS * 1000;
    }

    sound = pickGiftSound(giftCount);

    if (giftCount >= 5) {
      minimumVolume = 0.50;
    }

    if (giftCount >= 21) {
      minimumVolume = 0.60;
    }

    if (giftCount >= 41) {
      minimumVolume = 0.80;
    }
  }

  if (!isGiftAlert) {
    const tier = String(event.tier);
    sound = pickTierSound(tier);

    if (tier === '2000') {
      minimumVolume = 0.50;
    }

    if (tier === '3000') {
      minimumVolume = 0.80;
    }
  }

  showSubAlert(buildSubAlertText(event, isGiftAlert, giftCount));

  playAlert({
    sound: sound,
    volume: pickVolume(minimumVolume)
  });
});

// ==============================
// LECTURE
// ==============================

const audio = new Audio();

function playAlert(config) {
  const sound = config.sound;
  const volume = config.volume;

  audio.pause();
  audio.src = sound;
  audio.volume = volume;
  audio.currentTime = 0;

  audio.play().catch(function (error) {
    console.warn('Impossible de lire le son :', sound, error);
  });

  setTimeout(function () {
    SE_API.resumeQueue();
  }, ALERT_DURATION_SECONDS * 1000);
}

const ALL_SOUNDS = [
  ...SOUNDS.tier1,
  ...SOUNDS.tier2,
  ...SOUNDS.tier3,
  ...SOUNDS.gift1_4,
  ...SOUNDS.gift5_10,
  ...SOUNDS.gift11_20,
  ...SOUNDS.gift21_40,
  ...SOUNDS.gift41_60,
  ...SOUNDS.gift61,
  ...SOUNDS.other
];

const unlockButton = document.getElementById('unlock-audio');

if (unlockButton) {
  unlockButton.addEventListener('click', function () {
    playAlert({
      sound: pickRandom(ALL_SOUNDS),
      volume: pickVolume()
    });
  });
}

// ==============================
// AMBIANCE ALÉATOIRE (10–25 min)
// ==============================

const AMBIENT_MIN_MS = 30 * 60 * 1000;
const AMBIENT_MAX_MS = 60 * 60 * 1000;

function playAmbient() {
  const sound = pickRandom(ALL_SOUNDS);
  const volume = pickVolume();

  audio.pause();
  audio.src = sound;
  audio.volume = volume;
  audio.currentTime = 0;

  audio.play().catch(function (error) {
    console.warn('Impossible de lire le son ambiant :', sound, error);
  });
}

function scheduleAmbient() {
  const delay = AMBIENT_MIN_MS + Math.random() * (AMBIENT_MAX_MS - AMBIENT_MIN_MS);

  setTimeout(function () {
    playAmbient();
    scheduleAmbient();
  }, delay);
}

scheduleAmbient();
