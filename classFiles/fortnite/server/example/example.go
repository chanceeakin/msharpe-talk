package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/chanceeakin/go-fortnitetracker"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

// Input is the input struct.
type Input struct {
	Platform string
	Username string
}

// GetStats grabs stats for fortnite.
func GetStats(w http.ResponseWriter, r *http.Request) {
	log.Print("Endpoint hit")
	params := r.URL.Query()
	var i Input
	i.Platform = params["platform"][0]
	i.Username = params["username"][0]
	httpClient := &http.Client{}
	key := "d0066755-85c8-465a-b2d7-b79a5086a61f" // Generate a Fortnite Tracker API key at https://fortnitetracker.com/site-api

	tracker := fortnitetracker.NewFortniteTracker(httpClient, key)
	stats, err := tracker.GetStats(i.Platform, i.Username)
	if err != nil {
		log.Print(err)
		http.Error(w, "an error occurred.", 400)
		return
	}
	statsJSON, err := json.Marshal(stats)
	if err != nil {
		log.Print(err)
		http.Error(w, "an error occurred.", 400)
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.Write(statsJSON)
}

func main() {

	router := mux.NewRouter()

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Accept", "Content-Type"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	router.HandleFunc("/stats", GetStats).Methods("GET")
	log.Print("Server Online")
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(headersOk, originsOk, methodsOk)(router)))
}
