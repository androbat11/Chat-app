use notify::{Event, RecursiveMode, Result, Watcher};
use std::{path::Path, sync::mpsc};

struct Watcher {
    eventSender: mpsc::Sender<Event>,
    eventReceiver: mpsc::Receiver<Event>,
}

impl Watcher {
   pub fn new(event_sender: mpsc::Sender<Event>, event_receiver: mpsc::Receiver<Event>) -> Result<()> {
        // TODO: implement the watcher
    }
}


pub fn watch_file_changes() -> Result<()> {
    // Implement
}