import content from '../data/database.json'

function Event (rawData) {
    let e = {}
    e = Object.assign(e, rawData)
    e.RawData = rawData
    return e
}

const EventService = {
    getRawEvent: function (kwargs) {
        const events = this.getRawEvents(kwargs)
        if (events.length) {
            return events[0]
        }
    },
    getRawEvents: function (kwargs) {
        return Object.values(content.data['api::event.event'])
    },
    getEvent: function (kwargs) {
        const rawevent = this.getRawEvent(kwargs)
        let e
        if (rawevent) {
            e = Event(rawevent)
        } else {
            e = Event({})
        }
        return e
    },
    getEvents: function (kwargs) {
        const events = this.getRawEvents(kwargs)
        return events.map(event => Event(event))
    }
}

module.exports = EventService