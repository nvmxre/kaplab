import programsData from "@/data/services/programs.json"
import ivDripsData from "@/data/services/iv-drips.json"
import diagnosticsData from "@/data/services/diagnostics.json"
import cosmeticsData from "@/data/services/cosmetics.json"

export const servicesData = {
  programs: programsData,
  "iv-drips": ivDripsData,
  diagnostics: diagnosticsData,
  cosmetics: cosmeticsData,
}

export const getServicesByCategory = (category: keyof typeof servicesData) => {
  return servicesData[category] || []
}

export const getServicesCount = (category: keyof typeof servicesData) => {
  const services = servicesData[category]
  return Array.isArray(services) ? services.length : 0
}

export const getAllServicesCount = () => {
  return Object.values(servicesData).reduce((total, services) => {
    return total + (Array.isArray(services) ? services.length : 0)
  }, 0)
}
