const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Hallo, perkenalkan aku adalah Bot. Siapa nama kamu?",
        `Hallo ${data?.nama}, berapa usia kamu?`,
        `Ohh ${data?.usia}, hobi kamu apa yaa?`,
        `Wahh sama dong, aku juga hobi ${data?.hobi}, btw kamu kerja apa?`,
        `Okee, semangat yaa`
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if (jawaban.value.length < 1) return alert("eittsss, kamu belum jawab..")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pekerjaan: jawaban.value })
    } else if (init === 5) {
        finish()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finish() {
    pertanyaan.innerHTML = `Thank u ${usersData[0]} udah mampir ke Bot ini, kapan-kapan kita ${usersData[2]} bareng yaa..`
    jawaban.value = "have a nice day.."

}

function botEnd() {
    alert(`Terima kasih ${usersData[0]} sudah berkunjung! kamu akan di arahkan kembali ke halaman utama.`)
    window.location.reload()
}